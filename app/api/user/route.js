import { applicationDefault, getApp, initializeApp } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import serviceAccount from "@/firebase/adminsdk.json"
import { credential } from "firebase-admin"

export async function POST(request) {
    let app
    try {
        app = getApp("admin")
    } catch (error) {
        app = initializeApp({
            credential: credential.cert({
                "type": "service_account",
                "project_id": "blackat-acf2d",
                "private_key_id": "f73484c6ef5655ebd0019781d76f5658f5664ddf",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDB0VR4/rqMowSe\nAzrQSymBmMhF0xcp7mhvQlNvKPtYQMisf3XyRtSAxJG4+YjfoC2ajUzgXZs7w5U5\nJ7vkkW9DmTab/DPHD06o0FJVVZHWhNgYrpuCUIF2Qpl7OkmHPij0i3OcjTFSciuK\nY7a1cfbEmN9G0hIsZST6Qcw0MEvnHT6MihLlosrtqUe9Hdn4YER41kENoPBBpP/9\nY6G2gTnS/slfv2JvjzunfRXC59x2pPGdRr4TBILnTsI7NjHjK0EuFgdSVeKdcfNy\n7TDyya7DIb6gArK6Cnk1i5rQrSOaQfmQpHBaVmZJqaJ+HrDGu9XVENlElP72AUUw\nnLbFnNrzAgMBAAECgf8JTsf7+Hvt6rkRzn9P29O5CzPeRK5QkW29y/kmt9EeAnbr\n7+fJM0M9gm9e+kJ6XK9bgHy4K4pnCQyK7l2QFPNwHnMIdBQmmTs84C2qoCYVgZb9\nPhoboHbTZEFF9P8af5Zo3MIK78v2GpSTTQlqJcOk+KNl/4N2gDfN6wCnRLmNm/Gy\nRoojXmcUK2Bz+szh0vuCV0HAIGFKpECEywaDaQwpWR83CjNPV9a2YhHho30thKh6\nNm6W4iJRFYHFKyb3JQ685UY+2G6vwrMFWBZyqojoUv/mPzz+CM7swiQQ7gfpiW2B\nFULxdrju3Q6A+MCzHOvIGH87ZYPZFJ9k76fRC0kCgYEA5YSu23qoxbVubbKEyHoH\n8sf4YnVxxvkubjSE8whksnT2iq1iyIQZIYiitH7jp8I1zvgEmtyi0Zd51UwxHyXI\npLDSGGS4oDFl6wQzm+1+tij+3aT9t3Mk/el2gEMB2MyPf0HHCiaRpsUphryi4syo\nwfqiu/LwWn2GxCCyU2ge9f0CgYEA2C4nJQEYZ7CatJTvqJTc+eiaeXoniyR9n5gp\nF8OovGDRWPEi9KBzAbDlCbD6CzTlsNLSHE+pmFKj7YUWnM+y+ZMQO5uAciNvyZ2X\neYE7aF6aZrxQge3tTtNEuv4caQokqTk0WC53Mb4eVQa2KBy3wsGVoiGjyQZpWwCa\n9WASb68CgYBYsdOYwWfjL1/DSI+DoZTcv2Y/Nj+Hste8gtM1z/KJ/CUiJircbiAA\nE3s84SQ8uhJtLu8ooUbSVAUi5lS9Qq6s5h/qiVHHpg9KqM8A3OBwqJsFMDNT501O\nSiAfJMXb8AEsHlE6nPkAR4Tqqo8PsiMtAxxMIW+8qHGh7Ti8fqooSQKBgQCwbPIb\nXAp7zQBk8cupDFxPRAqVqyCMiOpRDhAzScXyfx069giuFiflsGUrhJh7/t6ZcWRy\nIH1rR75rAJuUvFj3H5M24lBwVgVMSGWvjs1Z/yMJRxR5BSEPnJHR/cJX4yRKStoy\nQTGbkeoVQBX3JIC/29bva37Md4QR9auBJ7fEFwKBgQCqsktNWrcW+hx1bOZn9f5P\n07BpbQier/A9OhSELsNkUPfw3nzfUGCpP+2lDGna5M1ZcJ1oZfKkuSGOjnxcCSaQ\n5V8ZtImnXsdni1uA4Ibea/BkiSgRR3HTpqAZ4HYdM07CNYG8zxTTfVBo0qusFppc\nxNGvUBvF1/ADYZmiItQDVQ==\n-----END PRIVATE KEY-----\n",
                "client_email": "firebase-adminsdk-200e2@blackat-acf2d.iam.gserviceaccount.com",
                "client_id": "105187024902850026058",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-200e2%40blackat-acf2d.iam.gserviceaccount.com"
            }
            ),
            projectId: 'blackat-acf2d',
        }, "admin")
    } finally {
        //
    }



    const data = await request.formData()

    const idToken = data.get("id_token")

    if (idToken !== null) {

        try {
            let result = await getAuth(app).verifyIdToken(idToken)
            let user = await getAuth(app).getUser(result.uid)
            console.log(user)
            return new Response("OK, UID" + result.idToken)
        } catch (error) {
            switch (error.code) {
                case 'auth/id-token-expired':
                    return new Response("The provided Firebase ID token is expired.", {
                        status: 400,
                        statusText: 'id-token-expired'
                    })
                case 'auth/id-token-revoked':
                    return new Response("The Firebase ID token has been revoked.", {
                        status: 400,
                        statusText: 'id-token-revoked'
                    })
                default:
                    return new Response("The Firebase ID token is invalid", {
                        status: 400,
                        statusText: 'id-token-is-invalid'
                    })
            }
        }
    }

    return new Response("ID TOKEN IS REQUIRED", {
        status: 400
    })




}
