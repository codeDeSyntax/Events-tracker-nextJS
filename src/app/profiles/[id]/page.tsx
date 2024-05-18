export default function userProfile({params} : any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile {params.id}</h1>
            <hr/>
        </div>
    )
    } 