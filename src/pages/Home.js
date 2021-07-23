import Jobs from '../components/Jobs'
import { useJobContext } from '../context';

export const Home = () => {
    const {jobs_error:error,jobs_loading:loading,jobs} = useJobContext()
   if(loading){
      return <h1 className="text-center">Loading</h1>
   }
   if(error){
      return <h1 className="text-center">There is Some Error</h1>
   }
   if(jobs.length < 1){
      return <h1 className="text-center">No Jobs Found</h1>
   }
    return (
      <div className="jobs-list">
        <div className="jobs-main">
        {jobs.map((item) => {
        return <Jobs key={item.id} {...item}></Jobs>;
           })}
        </div>
      </div>
    )
}