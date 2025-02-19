import React from 'react';

const EmailVerificado: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
        width: '100%',
        height: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#000' }}>
        E-mail verificado
      </h1>
      <p style={{ color: '#555', fontSize: '16px', marginBottom: '20px' }}>
        Seu e-mail foi verificado com sucesso
      </p>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="green"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '50px', height: '50px' }}
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <button
        style={{
          width: '100%',
          maxWidth: '300px',
          padding: '15px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginTop: '20px',
        }}
      >
        Concluído
      </button>
    </div>
  );
};

export default EmailVerificado;