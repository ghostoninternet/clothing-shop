const whiteList = [
  "http://localhost:5173",
  "http://localhost:5050"
]

export const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      return callback(null, true) 
    } else {
      return callback(new Error('Not allowed by CORS'))
    }
  },

  // Some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200,

  // CORS sẽ cho phép nhận cookies từ request
  credentials: true
}