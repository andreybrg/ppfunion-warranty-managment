import { useSelector } from "react-redux"
import { CODE_QUERY_PAGE_LIMIT } from "shared/utils/constants"

export const withCodesQueryData = (Component) => (props) => {

    const page = useSelector(store => store.codeList.data.page)
    const limit = CODE_QUERY_PAGE_LIMIT
    const statusQuery = useSelector(store => store.filtration.filtration.status)
    const searchQueryType = useSelector(store => store.search.searchType)
    const searchQuery = useSelector(store => store.search.searchValue)

    const queryData = {
        page: page,
        limit: limit,
        status: statusQuery,
        searchType: searchQueryType,
        searchQuery: searchQuery,
    }

    const ComponentWithCodesQueryData = <Component {...props}  queryData={queryData}/>

    return ComponentWithCodesQueryData
}