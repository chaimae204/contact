import {v4 as uuid} from 'uuid';

const stateIn= {
    contacts:[
        {id:uuid(),name:'Maram obaid',phone:'0654123587',ville:'Tanger'},
        {id:uuid(),name:'Amina owami',phone:'0654123587',ville:'Fes'},
        {id:uuid(),name:'Yahya Raghi',phone:'0669874527',ville:'Twissit'},
        {id:uuid(),name:'Manal ARiad',phone:'073216589',ville:'Oujda'},
        {id:uuid(),name:'Ahmed Alwat',phone:'06569871282',ville:'Rabat'},
        {id:uuid(),name:'Taghaila Atam',phone:'0654123587',ville:'Tantan'},
    ]
}


export default function PageIn (state=stateIn, action){

    if (action.type === "ajt"){
        let nvCont = {};
        let tabCont = [...state.contacts];
        nvCont.id = uuid();
        nvCont.name = action.payload[0];
        nvCont.phone = action.payload[1];
        nvCont.ville = action.payload[2];
        tabCont.push(nvCont);
        return {contacts: tabCont};

    }

    if (action.type === "sup"){
            let tabCont = state.contacts.filter((t)=>{
                return t.id != action.payload;
            });
            return {contacts: tabCont};
        }
        return state;
    }
   

