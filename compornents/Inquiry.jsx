import React from 'react'
import InputForm from './InputFrom';

const Inquiry = () => {
  return (
    <div className='inquiry'>
      <div className="mv">
      <div className="overlay"></div>
        <h2>お問合せ</h2>
      </div>

      <div className="contents">
        <p>柴一建設のコーポレートサイトをご覧いただき、誠にありがとうございます。<br />
          お問い合わせについては、下記のフォームからお願いいたします。<br />
          <br />
          ※ご記入いただいた個人情報は、お問い合わせに対する回答を差し上げる目的以外では利用いたしません。</p>
      </div>
      <InputForm />
    </div>
  )
}

export default Inquiry;