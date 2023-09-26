import res from "@/mock/test"

export default{
    getTest(){
        return res({
            url: "puge/test",
            methods: "get"
        })
    }
}