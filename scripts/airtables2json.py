'''
    fetch data from AirTable API and write to a file on S3
    set as environment variables for Lambda function
    required:
    - AIRTABLE_APP - AirTable app id (from https://airtable.com/api)
    - AIRTABLE_TABLE - AirTable table id (from https://airtable.com/api)
    - AIRTABLE_TOKEN - API token (from https://airtable.com/api)
    - S3_BUCKET - destination bucket
    optional (will use defaults if not set):
    - S3_FILENAME - destination filename (default airtable.json)
    - ACL - access control for S3 file (default public-read)
    - CACHE_HOURS - set Expires header to this many hours in future (default 6)
'''

from datetime import datetime, timedelta
import json
import os

import boto3
import requests

API_URL = 'https://api.airtable.com/v0/%s/%s' % (
    'appJ3duopN1JiFnMA', 'Solutions')
AUTH = {'Authorization': 'Bearer %s' % 'keyC5CSzA7yhjjmO2'}

def load_data():
    '''
        load data from AirTable, fetching additional pages if needed
    '''
    rval = {'updated': datetime.now().isoformat()}
    params = {}
    if os.environ.get('AIRTABLE_VIEW', None):
        params['view'] = os.environ['AIRTABLE_VIEW']
    req = requests.get(API_URL, headers=AUTH, params=params)
    rval = req.json()
    data = req.json()
    while data.get('offset'):
        params['offset'] = data['offset']
        req = requests.get(API_URL, headers=AUTH, params=params)
        data = req.json()
        rval['records'] += data.get('records', [])
    return rval

def write_json(data):
    '''
        write to S3 bucket
    '''
    print(json.dumps(data))


def lambda_handler(event, context):
    write_json(load_data())


if __name__ == '__main__':
    # print('get data from %s and write to %s/%s' % (API_URL, BUCKET, FILENAME))
    write_json(load_data())
