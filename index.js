
const user=require("./modules/user.module")
const yargs=require("yargs");
console.log(process.argv)
yargs.command({
    command:"add",
    handler:function(argv){
        user.add(argv)
    }
})

yargs.command({
    command:"showAll",
    handler:function(argv){
        user.showALL(argv)
    }
})

yargs.command({
    command:"showSingle",
    // builder:{
    //     name:{demandOption:true}
    // },
    handler:function(argv){
        user.showSingle(argv.id)
    }
})

yargs.command({
    command:"edit",
    handler:function(){
        user.edit()
    }
})

yargs.command({
    command:"del",
    builder:{
          name:{
            demandOption:true
          }
    },
    handler:function(argv){
        user.del(argv.name)
    }
})

yargs.argv