import{test,request,expect} from '@playwright/test';


test('GET API Request', async () => {
  const apiContext = await request.newContext();
  
  const response = await apiContext.get('https://reqres.in/api/users?page=2');
  
  expect(response.status()).toBe(200);
  
  const body = await response.json();
  console.log(body.data);
  
  expect(body.data.length).toBeGreaterThan(0);
});

test('POST API Request', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.post('https://reqres.in/api/users', {
    data: {
      name: 'Naveen',
      job: 'QA Engineer'
    },
  });

  expect(response.status()).toBe(201); // 201 = Created
  const body = await response.json();

  expect(body.name).toBe('Naveen');
  expect(body).toHaveProperty('id');
});

test('PUT API Request', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.put('https://reqres.in/api/users/2', {
    data: {
      name: 'Naveen',
      job: 'Senior QA Engineer'
    },
  });

  expect(response.status()).toBe(200); // 200 = OK
  const body = await response.json();

  expect(body.job).toBe('Senior QA Engineer');
});

    
