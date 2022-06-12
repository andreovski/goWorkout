import React from "react"
import AdminRoutes from "./src/routes/admin.routes"

import { Providers } from "./src/providers"
import { StatusBar } from "react-native"

export default function App() {
  return (
    <Providers>
      <StatusBar animated translucent barStyle="light-content" backgroundColor="transparent" />
      <AdminRoutes />
    </Providers>
  )
}
