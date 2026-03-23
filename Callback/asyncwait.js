async function demo(){
    try {
        await login();
        await userDetail();
    }
    catch (error) {
        console.log("error",error)
    }
    console.log("all task done");
}
demo();
