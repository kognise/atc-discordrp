const position = document.getElementById('position')
const client = document.getElementById('client')
const network = document.getElementById('network')

const updateActivity = async () => {
  if (position.value.trim().length < 3) {
    await stopRpc()
  } else {
    await setRpc(position.value.trim().toUpperCase(), client.value, network.value)
  }
}

position.addEventListener('input', updateActivity)
client.addEventListener('input', updateActivity)
network.addEventListener('input', updateActivity)