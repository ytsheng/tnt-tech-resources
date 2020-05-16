import json


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
    filter_condition = "false" if len(function_ids) == 0 else " && ".join([f"this.props.filter['{fid}']" for fid in function_ids])
    return (f' {filter_condition} ?\
<AppItem\
    name={{\"{field["Solution Name"]}\"}}\
    functions={{\"{"Not populated" if len(functions) == 0 else ", ".join(functions)}\"}}\
    platforms={{\"{"Not populated" if "Supported Platform" not in field else field["Supported Platform"]}\"}}\
    is_free={{\"{"Not populated" if "Free?" not in field else ("Yes" if field["Free?"] else "No")}\"}}\
    is_optin={{\"{"Not populated" if "Opt-in?" not in field else ("Opt-in" if field["Opt-in?"] else "Opt-out")}\"}}\
    status={{\"{"Not populated" if "Project Status" not in field else field["Project Status"]}\"}}\
    en_api={{\"{"Not populated" if "Exposure Notifications API" not in field else field["Exposure Notifications API"]}\"}} \
    details={{\"{"Not populated" if "How it works?" not in field else field["How it works?"] }\"}} \
    state_adoption={{\"{"Not populated" if "Adoption" not in field else field["Adoption"]}\"}} \
    target_audience={{\"{"Not populated" if "Target Audience" not in field else field["Target Audience"]}\"}} \
/> : \
<div/> \
    ')

def main():
    data = read_json("../../applist.json")
    fields = fieldsFromData(data["records"], "App")
    print(f"number of apps: {len(fields)}")
    function_set = set()
    app_items = [field2appitem(f, function_set) for f in fields]
    applist = "\n".join(["<div>{" + app_item + "}</div>" for app_item in app_items])
    # To be filled in the AppList.js
    # print(applist)
    # To be filled in ExploreFunctions.js
    print(function_set)

main()
