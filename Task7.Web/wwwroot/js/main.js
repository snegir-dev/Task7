let connectionId = window.location.search.split('=').slice(-1)[0];

window.onload = async function () {
    await hubConnection.start();
    console.log(hubConnection.connectionId)
    await hubConnection.invoke("Connect", connectionId);
}