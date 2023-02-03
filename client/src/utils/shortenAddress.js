
// This function shortens the address to 5 characters at the beginning and 4 characters at the end
export const shortenAddress = (address) => {
  if (!address) {
    return address;
  }
  return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
};
