import json
import requests

no_data = "Data Unavailable"

def read_json(file_path):
    with open(file_path) as f:
        data = json.load(f)
    return data

def fieldsFromData(data, atype):
    fields = [s["fields"] for s in data]
    return [f for f in fields if "Type" in f and f["Type"] == atype]

def field2appitem(field, function_id_set):
    functions = [] if "Functions" not in field else [function for function in field["Functions"]]
    function_ids = [("_").join(function.lower().strip().split()) for function in functions]
    function_id_set.update(function_ids)
    filter_condition = "false" if len(function_ids) == 0 else " || ".join([f"this.props.filter['{fid}']" for fid in function_ids])
    return f'{filter_condition} ? \
<AppItem\
    name={{\"{field["Solution Name"]}\"}}\
    homepage={{\"{"" if "Homepage" not in field or len(field["Homepage"]) == 0 else fetchLink(field["Homepage"][0])}\"}}\
    details={{\"{formattedText(field, "Description", False).strip()}\"}}\
    functions={{\"{no_data if len(functions) == 0 else ", ".join(functions)}\"}}\
    platforms={{\"{formattedTextFromList(field, "Supported Platforms")}\"}}\
    is_free={{\"{formattedText(field, "Free?")}\"}}\
    is_optin={{\"{formattedText(field, "User Installation Required?")}\"}}\
    status={{\"{formattedText(field, "Project Status", False)}\"}}\
    en_api={{\"{formattedText(field, "Exposure Notifications API", False)}\"}} \
    state_adoption={{\"{formattedText(field, "Adoption", False)}\"}} \
    target_audience={{\"{formattedTextFromList(field, "Target Audience")}\"}} \
/> : <div/>'

#  homepage={{\"{"Not populated" if "Homepage" not in field else fetchLink(field["Homepage"])}\"}}\

def fetchLink(link_id):
    LINKS_API_URL = 'https://api.airtable.com/v0/%s/%s/%s' % ('appJ3duopN1JiFnMA', 'Links', link_id)
    AUTH = {'Authorization': 'Bearer %s' % 'keyC5CSzA7yhjjmO2'}
    req = requests.get(LINKS_API_URL, headers=AUTH)
    data = req.json()
    return data["fields"]["URL"]

def formattedTextFromList(field, col):
    return no_data if col not in field or len(field[col]) == 0 else ", ".join(field[col])

def formattedText(field, col, binary=True):
    if binary:
        return no_data if col not in field else ("Yes" if field[col] else "No")
    return no_data if col not in field else field[col]

def rateAppItem(app_item):
    criteria_cols = ['Adoption','Free?','User Installation Required?',
                     'Supported Platforms','Functions','Homepage',
                     'Description','Target Audience','Exposure Notifications API']
    populated_fields = set(criteria_cols).intersection(set(app_item.keys()))
    empty_fields = set(criteria_cols).difference(set(app_item.keys()))
    num_populated = len(populated_fields) # calculates number of populated fields for an app_item
    return num_populated

def sortAppItems(fields):
    fields_sorted = sorted(fields, reverse=True,
                           key=lambda x: (rateAppItem(x), x['Solution Name']))
    # sorts first on number of populated fields, then on name of solution
    return fields_sorted

def appfunctionlist(function_id_set):
    return '\n{\" \"}\n'.join([f'<AppFunction \
id=\"{fid}\" \
name=\"{function_name_from_id(fid)}\" \
activated={{this.props.settings["{fid}"]}} \
onClick={{(data) => this.props.onClick(data)}}/>' for fid in function_id_set])

def function_name_from_id(fid):
    return (" ".join([word[0].upper() + word[1:].strip() for word in fid.split('_')])).strip()

def main():
    data = read_json("../../applist.json")
    fields = fieldsFromData(data["records"], "App")
    print(f"number of apps: {len(fields)}")
    fields = sortAppItems(fields)
    function_set = set()
    app_items = [field2appitem(f, function_set) for f in fields]
    applist = "\n".join(["<div>{" + app_item + "}</div>" for app_item in app_items])
    # To be filled in the AppList.js
    print(applist)
    print("======")
    # To be filled in ExploreFunctions.js
    print(appfunctionlist(function_set))
    # print(function_set)

main()
