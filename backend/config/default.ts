export default {
    port: 1337,
    host: "localhost",
    dbURI: "mongodb://127.0.0.1:27017/workrlay",
    saltWorkFactor: 10,
    accessTokenTTL: 900,
    refreshTokenTTL: "7d",
    privateKey: `-----BEGIN PUBLIC KEY-----
    MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFXjGFEgFBrfnA+7bChryb/THfVi
    RSCMyUiJZx62C8aRY4jXrgx5pKT4Y0CdJO9PH5rQjvzy0cZaDuQCKWEFe5mtcleQ
    ms9W5HrlNvUjpVcy3/f5xEr/t7s7bg35Dqlop9ZHcIO9ov1f+mX60zGNJV6/G2KM
    J1RHB205UVnu1wDdAgMBAAE=
    -----END PUBLIC KEY-----`,
}