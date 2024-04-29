# Apache Airavata MFT Frontend

**Frontend Code:** https://github.com/Devins-Undergraduate-Education/Airavata-MFT-Frontend

**Backend Code:** https://github.com/Devins-Undergraduate-Education/Airavata-MFT-Backend

## Building Apache Airavata MFT User Interface
### Prerequsites
1. Install [Airavata MFT](https://github.com/apache/airavata-mft) locally
2. Set up the [backend repository](https://github.com/Devins-Undergraduate-Education/Airavata-MFT-Backend)

### Building the Distrubution

1. Clone this repository into a projeect folder
```
git clone https://github.com/Devins-Undergraduate-Education/Airavata-MFT-Frontend
```
2. Navigate into project directory
```
cd Airavata-MFT-Backend
```
3. Install dependencies:
```
npm i
```
4. From a seperate terminal, run Apache Airavata mft *(see [Apache Airavata Github](https://github.com/apache/airavata-mft))*
```
mft init
```
5. Run the project
```
npm run dev
```
6. If the page has not automatically opened, open your browser and navigate to `http://localhost:3000`<br><br>

---

## Current Features:
- List storages
- List file within storage

## Unsupported Features
- Add Storages

<br><br><br>*By: Ganning Xu*
