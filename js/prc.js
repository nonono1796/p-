const sayGoodmorning =()=>{
    console.log('おはようございます');
    console.log('よく眠れましたか？');
    console.log('今日も一日頑張りましょう！');
}

const sayGoodevening =()=>{
    console.log('こんばんは');
    console.log('今日も一日お疲れ様でした');
}

sayGoodevening();

sayGoodmorning();

const calculateTotal =(price , shippingFee)=>{
    console.log(price+shippingFee+'円');
}

calculateTotal(1000 , 500);

const double = (num) => {
      return num * 2;
     }
     
     // 関数の戻り値を出力する
     console.log(double(30));

     const netName ='侍太郎'

     const useVariable =()=>{
        console.log(netName);
     }

     useVariable();

     const test ={name : '野澤' , age : '27'};

     console.log(test.age);