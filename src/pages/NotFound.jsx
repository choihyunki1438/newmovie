import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound () {
    const navigate = useNavigate()

        return (
            <div className='page-container'>
              <div style={{
                marginTop: '64px',
                fontSize: '48px',
                fontWeight: 'bold',
                marginBottom: '32px'
              }}> 해당 페이지를 찾을 수 없습니다.</div>
                <div style={{fontSize: '32px', lineHeight: '1.6'
                }}>주소가 잘못되었거나 제공되지 않는 페이지 입니다.</div>
                <div 
                    onClick={() => navigate('/')}
                    style={{fontSize: '32px', lineHeight: '1.6', cursor: 'pointer', color: 'red'
                }}>메인 페이지로 이동</div>
            </div>
        );
    
}
