import axios from 'axios';

const GET_AIRTABLE_TABLE_DATA_URL = 'https://2ihr7pald8.execute-api.us-west-2.amazonaws.com/getData';
console.log(process.env)

const AirtableClient = () => ({
  getTableData: async () => axios({
    method: 'GET',
    url: GET_AIRTABLE_TABLE_DATA_URL,
  }) 
})

export default AirtableClient;