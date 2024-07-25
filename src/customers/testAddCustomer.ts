import PublicApiClient from '../publicApiClient';
import { PostCustomerPayload } from './customersClient';
import { ContactFields } from './entities/customers/contact/contact';
import { CustomerFields } from './entities/customers/customer';
import {
  CustomerContactRoleEnum,
  CustomerContactTypeEnum,
} from './entities/customers/customerContact/customerContact';

const publicApiClient = new PublicApiClient();
const customersClient = publicApiClient.getCustomersClient();
customersClient
  .setUrl('https://dev2.arrowxsp.com/index.php/api')
  .setApiKey('FvyZsYPSPafxZcPcN4Qj2vlYbqZvt4MU')
  .setHeaders({ partnerRef: 'XSP17727' });

const i = 7;

const payload: PostCustomerPayload = {
  [CustomerFields.COLUMN_COMPANY_NAME]: ``,
  [CustomerFields.COLUMN_ADDRESS_LINE_1]: '175 Av de Lattre de Tassigny',
  [CustomerFields.COLUMN_ZIP]: '93800',
  [CustomerFields.COLUMN_CITY]: 'EPINAY SUR SEINE',
  [CustomerFields.COLUMN_COUNTRY_CODE]: 'FR',
  [CustomerFields.COLUMN_RECEPTION_PHONE]: '0175831253',
  [CustomerFields.COLUMN_WEBSITE_URL]: 'www.adyl-it.com',
  [CustomerFields.COLUMN_EMAIL_CONTACT]: `baiss${i}@adyl-it.com`,
  [CustomerFields.COLUMN_CONTACT]: {
    [ContactFields.COLUMN_FIRSTNAME]: `Baiss ${i}`,
    [ContactFields.COLUMN_LASTNAME]: `Djo ${i}`,
    [ContactFields.COLUMN_EMAIL]: `baiss${i}@adyl-it.com`,
    [ContactFields.COLUMN_PHONE]: `0175831253`,
    [ContactFields.COLUMN_TYPE]: CustomerContactTypeEnum.OPERATIONS,
    [ContactFields.COLUMN_ROLE]: CustomerContactRoleEnum.PRIMARY,
  },
};

const handler = async () => {
  const response = await customersClient.createCustomer(payload);

  console.log(response);
};

(async () => await handler())();
