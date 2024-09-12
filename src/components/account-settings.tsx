"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Switch } from "~/components/ui/switch"
import { Separator } from "~/components/ui/separator"
import { toast } from '~/hooks/use-toast'
import { UserProfile, accountSettingsFormSchema } from '~/lib/types/profiles'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import {  updateUserSettingsAction } from '~/actions/data-mutation/profiles'
import { isActionResponse } from '~/lib/types/api'





const AccountSettings = ({profile}: {profile: UserProfile}) => {
  const [isLoading, setIsLoading] = useState(false)
  const settingsForm = useForm<z.infer<typeof accountSettingsFormSchema>>({
    resolver: zodResolver(accountSettingsFormSchema),
    defaultValues: {
      firstName: profile.full_name.split(" ")[0],
      lastName: profile.full_name.split(" ").splice(1).join(" "),
      slug: profile.slug || "",
      emailNotifications: true,
    }
  })

  const onSubmit = async (values: z.infer<typeof accountSettingsFormSchema>) => {
    setIsLoading(true)
    // API call
    try {
      const response = await updateUserSettingsAction(values);
      if (response.ok) {
          const result = await response.json();
          
          if (isActionResponse(result) && result.success) {
              // Handle successful update
              setIsLoading(false)
              toast({
                title: "Settings updated",
                description: "Your account settings have been updated successfully.",
              })
          } else {
              // Handle unexpected success response
              console.error("Unexpected response:", result);
          }
      } else {
          // Handle HTTP errors
          const errorData = await response.json();
          if(isActionResponse(errorData)){
            console.error("Failed to update settings:", errorData.error as unknown);
            // Show error message to the user
            toast({
              title: "Uh oh! Something went wrong :(",
              description: "Please try again shortly",
            })
          }
      }
  } catch (error) {
      console.error("Error calling updateUserSettingsAction:", error);
      // Handle any network or other errors
  }

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
            <Form {...settingsForm}>
              <form onSubmit={settingsForm.handleSubmit(onSubmit)} >
                <CardContent className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:space-x-4">
                      <div className="flex-1 space-y-2">
                      <FormField
                        control={settingsForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                            <Input id="firstName" placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                        />
                        </div>
                        <div className="flex-1 space-y-2">
                        <FormField
                          control={settingsForm.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                              <Input id="lastName" placeholder="" {...field}   />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        </div>
                      </div>
                      <FormField
                     control={settingsForm.control}
                     name="slug"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>Profile Slug</FormLabel>
                         <FormControl >
                          <div className="flex items-center space-x-2">
                          <span className="text-gray-500">showcase.me/</span>
                         <Input id="slug" placeholder="" {...field}  className="flex-1"/>
                          </div>
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />

                    </div>
                    <Separator className='my-4' />
                    <div className=' space-y-4'>

                   
                    <h3 className="text-lg font-semibold">Preferences</h3>
                    <FormField
                     control={settingsForm.control}
                     name="emailNotifications"
                     render={({ field }) => (
                       <FormItem className="flex items-center justify-between">
                        <div className='space-y-1'>
                         <FormLabel>Email Notifications</FormLabel>
                         <p className="text-sm text-gray-500">Receive email updates about your account</p>
                        </div>
                         <FormControl className="flex items-center space-x-2">
                            <Switch
                             id="emailNotifications"
                             checked={field.value}
                             onCheckedChange={field.onChange}
                           />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
                  </div>
                </CardContent>
              <CardFooter>
                <Button onClick={settingsForm.handleSubmit(onSubmit)} disabled={isLoading} className="w-full">
                  {isLoading ? "Updating..." : "Save Changes"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </motion.div>

    </div>
  )
}

export default AccountSettings