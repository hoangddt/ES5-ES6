function useLet() {
    let a;
    let b = "some thing here";

    console.log(a);
    console.log(b);

    a = "ok new a";
    b = "ok new b";

    a = "change a again";

    // let a = 'something else';
    // will fail because a already define
    console.log(a);
    console.log(b);
}

function useConst() {
    const a = 'haha';
    // a = 'no bullshit';
    // will cause error
    console.log(a);
}

useLet();
useConst();