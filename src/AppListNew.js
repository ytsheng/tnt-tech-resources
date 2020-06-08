import React from 'react';
import { capitalCase } from 'change-case';

import AppItem from './AppItem';
import { MISSING_FIELD_TEXT } from './constants';

const AppListNew = ({ masterList, functionFilters }) => {
  const getVisibleFilters = filters => Object.keys(filters).reduce((agg, cur) => {
    if (!filters[cur]) {
      return [...agg]
    }
    return [...agg, cur]
  }, [])

  const getCurrentlyVisibleSolutions = ({ masterList, filterList }) => masterList.filter(currentSolution => {
      const currentSolutionFns = currentSolution.fields.Functions || [];
      const isCurrentSolutionInFilterList = filterList.some(categoryFilter => currentSolutionFns.includes(categoryFilter));
      return isCurrentSolutionInFilterList
    })

  const joinList = (field = []) => field.join(', ') || MISSING_FIELD_TEXT;

  // Get a current list of toggled on Function filters and normalize their names from
  // snake_case => Capital Case so they can be compared against the airtable data
  const currentVisibleCategories = getVisibleFilters(functionFilters).map(capitalCase)
  // Filter the master list down to those that have at least one of the currently selected filters
  const currentList = getCurrentlyVisibleSolutions({ masterList, filterList: currentVisibleCategories })

  // Render the current list as a collection of AppItems
  return currentList.map(({
    id,
    fields
  }) => <AppItem
      key={id}
      name={fields['Solution Name']}
      homepage={fields['Homepage']}
      details={fields['Description']}
      functions={fields['Functions']}
      platforms={joinList(fields['Supported Platforms'])}
      is_free={fields['Revenue Model']}
      is_optin={fields['User Installation Required?']}
      status={fields['Project Status']}
      en_api={fields['Exposure Notifications API']}
      state_adoption={joinList(fields['Adoption Regions'])}
      target_audience={joinList(fields['Target Audience'])}
      technologies={joinList(fields['Technologies'])}
      country_coverage={joinList(fields['Country Coverage'])}
      // XXX: These fields do not not seem to map to any columns the current Master List
      // organizations={joinList(fields['Organizations']) || MISSING_FIELD_TEXT}
      // people={joinList(fields['People']) || MISSING_FIELD_TEXT}
    ></AppItem>
  )

}

export default AppListNew;

