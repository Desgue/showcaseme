"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Switch } from "~/components/ui/switch"
import { Separator } from "~/components/ui/separator"
import { User, Bell, Shield, Globe } from 'lucide-react'
import { toast } from '~/hooks/use-toast'

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  activeProfile: z.enum(['profile1', 'profile2', 'profile3']),
  emailNotifications: z.boolean(),
  twoFactorAuth: z.boolean(),
  publicProfile: z.boolean(),
})

type FormData = z.infer<typeof formSchema>

const AccountSettings: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      slug: 'john-doe',
      activeProfile: 'profile1',
      emailNotifications: true,
      twoFactorAuth: false,
      publicProfile: true,
    }
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    toast({
      title: "Settings updated",
      description: "Your account settings have been updated successfully.",
    })
    console.log(data)
  }

  return (
    <div className="container mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Account Settings</CardTitle>
            <CardDescription>Manage your account information and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" {...register('firstName')} />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" {...register('lastName')} />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">Profile Slug</Label>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">showcaseme.com/</span>
                    <Input id="slug" {...register('slug')} className="flex-1" />
                  </div>
                  {errors.slug && <p className="text-red-500 text-sm">{errors.slug.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="activeProfile">Active Profile Configuration</Label>
                  <Select onValueChange={(value) => register('activeProfile').onChange({ target: { value } })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select active profile" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="profile1">Profile 1</SelectItem>
                      <SelectItem value="profile2">Profile 2</SelectItem>
                      <SelectItem value="profile3">Profile 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Preferences</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                    <p className="text-sm text-gray-500">Receive email updates about your account</p>
                  </div>
                  <Switch
                    id="emailNotifications"
                    {...register('emailNotifications')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <Switch
                    id="twoFactorAuth"
                    {...register('twoFactorAuth')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="publicProfile">Public Profile</Label>
                    <p className="text-sm text-gray-500">Make your profile visible to everyone</p>
                  </div>
                  <Switch
                    id="publicProfile"
                    {...register('publicProfile')}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit(onSubmit)} disabled={isLoading} className="w-full">
              {isLoading ? "Updating..." : "Save Changes"}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

    </div>
  )
}

export default AccountSettings