import {Pipe} from "angular2/core";

@Pipe({name:'SearchName'})

export class SearchName{
    transform(value,arg){
        if(value==null) return null;
        let filter:string = arg[0];
        if(filter ==null) return null;
        if(filter==='') return value;
        return value.filter((item)=>
            {
                let name =  item.name.toLowerCase() +' '+item.surname.toLowerCase()
                return name.indexOf(filter.toLowerCase()) != -1;
            }
        );
    }
}