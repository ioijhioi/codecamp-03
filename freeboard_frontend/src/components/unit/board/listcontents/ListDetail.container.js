import { useQuery } from '@apollo/client';
import ListDetailUI from './ListDetail.presenter';
import { FETCH_BOARDS } from './ListDetail.queries';

export default function ListDetail(){
    const {data} = useQuery(FETCH_BOARDS)
    
    return (
        <ListDetailUI data={data} />
    )


}