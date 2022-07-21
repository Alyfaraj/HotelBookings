export default removeDomain = (email) => {
    return email?.substring(0, email.lastIndexOf("@"));
}