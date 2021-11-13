import React, { useEffect } from 'react'
import styles from './contact-form.module.css'

export default function ContactForm() {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact us</h1>
      <form 
        className={styles.main}
      >
      <div 
        className={styles.inputGroup}
      >
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' className={styles.inputField}/>  
      </div>
      <div 
        className={styles.inputGroup}
        auto-complete="off"
      >
        < label htmlFor='email'>Email</label>
        < input type='email' name='email' className={styles.inputField}/>
      </div>
      <div 
        className={styles.inputGroup}
        auto-complete="off"
      >
        <label htmlFor='message'>Message</label>
        <input type='text' name='message' className={styles.inputField}/>
      </div>
      <input type='submit'/>
      </form >
    </div>
  )
}
