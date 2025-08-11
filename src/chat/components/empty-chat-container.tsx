function EmptyChatContainer() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h2 className="mb-2 text-2xl font-semibold">No hay mensajes en este chat</h2>
      <p className="text-gray-500">
        Selecciona un chat o inicia una nueva conversación para comenzar a chatear.
      </p>
    </div>
  )
}

export default EmptyChatContainer
