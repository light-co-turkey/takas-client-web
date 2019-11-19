import React, { Component } from 'react';
import './styles/create-product.scss';

export class CreateProduct extends Component {
  render() {
    return (
      <div style={{ display: 'flex', width:'100%', height:'100%', padding: '0 18% 0 18%'}}>
        <div className='sort-frame'><div className='sort-title'><p className='title'>Çeşit</p></div></div>
        <div className='form-frame'>
          <div className='add-image'></div>
          <ul>
            <li><input id='single' placeholder='Başlık'></input></li>
            <li><input id='single' placeholder='Değer ($)'></input></li>
            <li><input id='long' placeholder='Açıklama'></input></li>
          </ul>
        </div>
        <div className='form-submit'>
          <button className='cancel both'>Vazgeç</button>
          <button className='submit both'>Kaydet</button>
        </div>
      </div>
    );
  }
}

export default CreateProduct;
