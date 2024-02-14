import React,{useState} from 'react'
import './ContactInfo.css'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  
  console.log(formData);
};
  return (
    <div>
       <div className="contact-info">
            <h2>İletişim Bilgileri</h2>
            <ul>
                
                <li><strong>E-posta:</strong> beyazmasa@bursa.bel.tr</li>
                <li><strong>Telefon:</strong> Alo 153 Beyazmasa</li>
                <li><strong>Adres:</strong>Zafer Mh. Ankara Yolu Cd. C Blok No:1 PK:16080 Osmangazi / BURSA </li>
            </ul>
            <h4>Yukarıdaki bilgileri kullanarak Belediyemize ulaşabilirsiniz.</h4>
        </div>
       
      
      
      
    </div>
  )
}

export default Contact