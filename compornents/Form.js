import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: "sample@gmail.com",
      hasEmailError: false,
      content: "お問い合わせ内容",
      hasContactError: false,
    };
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";
    this.state = {                      
      emial: inputValue,
      hasEmailError: isEmpty,
    }
  }

  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";
    this.state = {
      content: inputValue,
      hasContentError: isEmpty,
    }
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <span>
          emailを入力してください
        </span>    
      );
    }

    let contentErrorText;
    if (this.state.hascontentError) {
      contentErrorText = (
        <span>
          お問い合わせ内容を入力してください
        </span>
      );
    } 

    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <span className = "message">送信完了しました</span>
      );
    } else {
      contactForm = (
        <form onSubmit={()=>{handleSubmit()}}>
          <p>メールアドレス（必須）</p>
          <input
            value = {this.state.email}
            onChange={(event)=>{handleEmailChange(event)}}
          />
          {emailErrorText}
          <p>お問い合わせ（必須）</p>
          <textarea 
            value = {this.state.content}
            onChange={(event)=>handleContenttChange(event)}
          />
          {contentErrortext}
          <input type="submit" value="送信" />  
        </form>
      );
    }

    return(
      <div className = "container">
        {contactForm}
     </div>
    );
  }



}

