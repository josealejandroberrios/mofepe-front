export const parseData = (data) => {
  let result = [];
  const dataKeys = Object.keys(data);
  
  for (let r = 0; r < data[dataKeys[0]].length; r++) {
    for (let j = 0; j < data[dataKeys[0]][r].length; j++) {
      if (dataKeys.length === 1) {
        if (dataKeys[0] === "totalRent") {
          result.push({
            period: 12 * r + ( j + 1),
            rent: data[dataKeys[0]][r][j],
          });
        } else {
          result.push({
            period: 12 * r + ( j + 1),
            appreciation: data[dataKeys[0]][r][j],
          });
        }
      } else {
        result.push({
          period: 12 * r + ( j + 1),
          rent: data[dataKeys[0]][r][j],
          appreciation: data[dataKeys[1]][r][j],
        });
      }
    }
  }

  return result
};

export const formatedNameLegend = (name) => name === 'rent' ? 'Renta' : 'Apreciación';

export const formattedNamePeriod  = (value) => `Mes ${value}`;

// export const formattedTolltip = (value, name) => [value, formatedNameLegend(name)];







