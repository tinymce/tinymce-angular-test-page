const tinymceai_token_provider = () => Promise.resolve({ 
  token: '',
});

export default {
  config: {
    tinymceai_token_provider,
    tinymceai_api_url: 'https://tinymceai.api.staging.tiny.cloud/',
  },
  toolbar: 'aichat aiquickactions aireview',
  name: 'tinymceai',
}

// fiddle https://fiddle.tiny.cloud/fUvo8MfzI7/6