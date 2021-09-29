import {tableDefinitionSql} from './Sql'
import {DataTypeMap} from "../Util/Vars";
export class OracleTables
{
    // @ts-ignore
    fnRemapDataTypes = (dataType:string):string => DataTypeMap[dataType];

    //Get an entity from the database
    fnGetSimpleEntity = (entityName:string, tableName:string) => {

    }
}

