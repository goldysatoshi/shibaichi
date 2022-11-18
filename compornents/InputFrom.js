import { useState } from 'react';


function InputForm() {
  const initialValues = {username:"", mailAddress:"", password:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange =(e) => {
    console.log(e.target.value);
    const {name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //ログイン情報を送信する
    //バリデーションチェック
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  

  const validate =(values) => {
    const errors ={};
    const regex =/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

    if (!values.username){
      errors.username ="氏名を入力して下さい。";
    }
    if (!values.mailAddress){
      errors.mailAddress ="メールアドレスを入力して下さい。";
    }else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "正しいメールアドレスを入力してください";
    }
    if (!values.password){
      errors.password ="お問合せ内容を入力して下さい。";
    }
    return errors;
  };

  return (

    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>お問い合せフォーム</h2>
        <hr />
        <div className='uiForm'>
          <div className='formField'>
            <label> 氏名</label>
            <input type='text' placeholder="氏名" name="username" 
            onChange={(e) => handleChange(e)}/>
          </div>
          <p className="errorMsg">{formErrors.username}</p>
          <div className='formField'>
            <label>メールアドレス
            </label>
            <input type='text' placeholder="メールアドレス" name="mailAddress" 
            onChange={(e) => handleChange(e)}/>
          </div>
          <p className="errorMsg">{formErrors.mailAddress}</p>
          <div className='formField'>
            <label>お問い合わせ内容</label>
            <textarea type='text' placeholder="お問い合わせ内容" name="password" 
            onChange={(e) => handleChange(e)}/>
          </div>
          <p className="errorMsg">{formErrors.password}</p>
          <button className='submitButton'>送信</button>
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="msgOk"><p className='complate'>お問合せありがとうございます。</p></div>
          )}
        </div>
      </form>

    </div>
  );
}

export default InputForm;
