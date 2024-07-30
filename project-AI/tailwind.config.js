import daisyui from "daisyui"
module.exports = {
  //...
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
        {
          mytheme: {
            primary: '#ED7624',
  
            secondary: '#0084DE',
  
            accent: '#FFE6E6',

            neutral: '#DEDEDE',
  
            'base-100': '#FFFFFF',
  
            info: '#000000',
  
            success: '#44E937',
  
            warning: '#ffe184',
  
            error: '#e44a4a',
          },
        },
    ]
  }, 
}