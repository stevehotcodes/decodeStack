import mssql from 'mssql'
import { sqlConfig } from '../config'

export default class DatabaseHelper {
    //singleton pattern
    private static instance:DatabaseHelper;
    private pool:Promise<mssql.ConnectionPool>;

    //instantiating database connection
    private constructor(){
        this.pool=mssql.connect(sqlConfig)
    }
    // creating the database instance
    public static getInstance():DatabaseHelper {
        if (!DatabaseHelper.instance){
            DatabaseHelper.instance=new DatabaseHelper()
        }return DatabaseHelper.instance

    }

    //methods to interact with the database
    private static inputsRequest(request:mssql.Request,data:{[x:string]:string|number|null}={})
    {
        const keys=Object.keys(data)
        keys.map(keyName=>{
            return request.input(keyName,data[keyName])
        })
        return request

    }
    //execute stored procedure
    async exec(storedProcedure:string,data:{[x:string]:string|number|null}={}){
        let request:mssql.Request=await (await this.pool).request()
        request=DatabaseHelper.inputsRequest(request, data)
        return await request.execute(storedProcedure)
    }
    //execute query
    async query(queryString:string){
        return (await this.pool).request().query(queryString)
    }


}