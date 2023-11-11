function splitReply(gptRep) {
  console.log(typeof gptRep)
  console.log(gptRep)

  if (!gptRep) {
    return ['', '']
  }
  const regex = /\(([^)]+)\)/g;
  const extractedContent = [];
  const stringWithoutParentheses = gptRep.replace(regex, (match, group) => {
  extractedContent.push(group);
  return '';
});
let res = [stringWithoutParentheses, extractedContent]
    return res;
  // return [gptRep, gptRep]
}

export { splitReply };