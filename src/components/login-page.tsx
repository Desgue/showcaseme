"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { FaGoogle } from 'react-icons/fa'
import { googlelogin } from '~/actions/supabase/auth'

const LoginPageComponent: React.FC = () => {
  const handleGoogleLogin = () => {
    googlelogin().catch(e=>console.error(e))
    console.log('Google login clicked')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gray-200 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      <div className="w-full max-w-md z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Welcome to Showcase Me</CardTitle>
              <CardDescription className="text-center">Sign in to create your professional website</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <Button
                  className="w-full flex items-center justify-center space-x-2"
                  formAction={handleGoogleLogin}
                  >
                  <FaGoogle />
                  <span>Sign in with Google</span>
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <p className="text-sm text-gray-500 text-center">
                By signing in, you agree to our Terms of Service and Privacy Policy.
              </p>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center text-gray-600"
        >
          <h2 className="text-xl font-semibold mb-4">Why Choose Showcase Me?</h2>
          <ul className="space-y-2">
            <li>Create a professional website in minutes</li>
            <li>No coding skills required</li>
            <li>SEO-optimized for better visibility</li>
            <li>Responsive design for all devices</li>
            <li>Customizable templates to match your brand</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default LoginPageComponent