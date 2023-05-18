$(document).ready(function() {
  $('#kayitFormu').validate({
    rules: {
      ad: 'required',
      soyad: 'required',
      eposta: {
        required: true,
        email: true
      },
      sifre: 'required',
      ceptelefonu: 'required',
      cinsiyet: 'required',
      dogumtarihi: 'required'
    },
    messages: {
      ad: 'Lütfen adınızı giriniz.',
      soyad: 'Lütfen soyadınızı giriniz.',
      eposta: {
        required: 'Lütfen e-posta adresinizi giriniz.',
        email: 'Lütfen geçerli bir e-posta adresi giriniz.'
      },
      sifre: 'Lütfen şifrenizi giriniz.',
      ceptelefonu: 'Lütfen cep telefonu numaranızı giriniz.',
      cinsiyet: 'Lütfen cinsiyetinizi seçiniz.',
      dogumtarihi: 'Lütfen doğum tarihinizi giriniz.'
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
