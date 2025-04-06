const regexp = /(20)|(31)|(4[20])|(5[31])|(6[420])|(7[531])|(8[6420])|(9[7531])/;
const getSmallestString = (s, re = regexp.exec(s)) => 
    re ? s.replace(regexp, re[0][1] + re[0][0]) : s;