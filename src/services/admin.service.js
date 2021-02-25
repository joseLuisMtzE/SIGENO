const serviceUrl = `http://localhost:3001/admins/`;

const findAll = async () => {
  const url = `${serviceUrl}`;
  const requestOptions = { method: 'GET' };
  const res = await fetch(url, requestOptions);
  return res.json();
};

const findById = async id => {
  const url = `${serviceUrl}/${id}`;
  const requestOptions = { method: 'GET' };
  const res = await fetch(url, requestOptions);
  return res.json();
};

const create = async admin => {
  const url = `${serviceUrl}`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(admin),
  };
  const res = await fetch(url, requestOptions);
  return res.json();
};

const update = async user => {
  const url = `${serviceUrl}${user._id}`;
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  const res = await fetch(url, requestOptions);
  return res.json();
};

const remove = async id => {
  const url = `${serviceUrl}${id}`;
  const requestOptions = { method: 'DELETE' };
  const res = await fetch(url, requestOptions);
  return res.json();
};

const methods = { findAll, findById, create, update, remove };

export default methods;
