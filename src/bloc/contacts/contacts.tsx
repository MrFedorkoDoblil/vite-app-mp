import React, { useState } from 'react'
import './contacts.scss'
import { CustomInput } from './customInput';
import emailjs from '@emailjs/browser';

type Message = {
  text: string;
  color: 'red' | 'black' | 'green'
}

export const Contacts = () => {

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [message, setMessage] = useState<Message>({text: '', color: 'black'});


  const handleMessage = (text: string, color: Message['color']) => {
    setMessage({
      text, color
    });
    setTimeout(() => {
      setMessage({...message, text: ''})
    }, 2000);
  }

  const handleInitialise = () => {
      setConfirm(false);
      setEmail('');
      setName('');
      setPosition('');
      setPhone('');
  }
  
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
        
    if(!phone || !name || !email || !position){
      return handleMessage('Заполните все необходимые поля', 'red');
    }
    if(!confirm){
      return handleMessage('Дайте согласие на обработку персональных данных', 'red');
    }

        
    const templateParams = {
        from_name: `${name}, ${email}`,
        message: ` Имя: ${name}, должность: ${position}, e-mail: ${email}, телефон: ${phone}`
    }

    await emailjs.send("service_vdndblt","template_qxlfnze", templateParams, 'IXHyDlr81QfR26WOW')
      .then(() => {
          handleInitialise();
          handleMessage('Успешно отправлено', 'green');
        }, () => {
          handleMessage('Ошибка при отправке данных', 'red')
      });
    };
   
  


  return (
    <>
      <a className="anchor" id="contacts"></a>
    <div className="form" >
      <div className="form__block">
        <div className="form__title">Регистрация участника конференции</div>
          <form >
            <CustomInput
              id='name'
              label='ФАМИЛИЯ ИМЯ ОТЧЕСТВО'
              type='text'
              state={name}
              stateSetter={setName}
            />
            <CustomInput
              id='position'
              label='ДОЛЖНОСТЬ'
              type='text'
              state={position}
              stateSetter={setPosition}
            />
            <CustomInput
              id='email'
              label='ЭЛЕКТРОННАЯ ПОЧТА'
              type='email'
              state={email}
              stateSetter={setEmail}
            />
            <CustomInput
              id='phone'
              label='КОНТАКТНЫЙ ТЕЛЕФОН'
              type='phone'
              state={phone}
              stateSetter={setPhone}
            />
    
            <div className='form__checkbox'>
              <input 
                type="checkbox" 
                id='checkbox'
                checked = {confirm}
                onChange={() => {setConfirm(!confirm)}}
              />
              <p style={{fontSize:'12px'}}>Я ознакомлен с <a target="_blank" rel="noopener noreferrer" href="/privacy.pdf" style={{fontSize:'12px', color:'blue'}}>правилами обработки персональных данных</a><br/> и даю согласие на обработку моих персональных данных</p>

            </div>
            <button 
              className="btn" 
              type='submit'
              onClick={handleSubmit}
            >Подать заявку</button>
            {message.text ? <div style={{height: '16px', color: message.color}}>{message.text}</div>  : <div style={{height: '16px'}}></div>}
          </form>
      </div>
      <div className="form__line"></div>
    </div>
    </>
  )
}
