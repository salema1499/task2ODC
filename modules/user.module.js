heads = [
    {key:"id",default: Date.now()}, 
    {key:"name", default:null},
    {key: "age", default:null}, 
    {key:"email", default:null}, 
    {key:"status", default: false}]
const Argv = require("yargs");
const deal=require("./deal.module")
class User{
    static add(data){
        const user={}
        heads.forEach(head => {
           if(head.default!=null)
               user[head.key]=head.default
           else user[head.key]=data[head.key]
        });
       console.log(user);
       const all = deal.readFromJson()
        all.push(user)
        deal.writeToJson(all)
    }
    static showSingle(){
        const all = deal.readFromJson()
        all.forEach((al)=>{
            console.log(al.name)
        })
      
       
    }
    static showALL(){
        const all = deal.readFromJson()
        all.forEach((al)=>{
            console.log(al)
        })
       
       
     
       
    }
   
    static del(name){
        const all = deal.readFromJson()
        //console.log(name)
        const remv=all.filter(al=>{
            return al.name !==name
        })
        deal.writeToJson(remv)
    }

   
}
module.exports=User



