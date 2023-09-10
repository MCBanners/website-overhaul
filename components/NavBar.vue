<template>
  <div class="w-full">
    <nav class>
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex h-24 items-center">
          <div class="flex w-full justify-evenly space-y-4">
            <div class="flex items-center">
              <NuxtLink to="/">
                <h5 class="font-bold mb-0 ml-4">Home</h5>
              </NuxtLink>
              <NuxtLink to="/resources">
                <h5 class="font-bold mb-0 ml-4">Resource Banners</h5>
              </NuxtLink>
              <!-- <NuxtLink to="/sponge">
                <h5 class="font-bold mb-0 ml-4">Sponge</h5>
              </NuxtLink>
              <NuxtLink to="/curseforge">
                <h5 class="font-bold mb-0 ml-4">CurseForge</h5>
              </NuxtLink>
              <NuxtLink to="/modrinth">
                <h5 class="font-bold mb-0 ml-4">Modrinth</h5>
              </NuxtLink>
              <NuxtLink to="/builtbybit">
                <h5 class="font-bold mb-0 ml-4">BuiltByBit</h5>
              </NuxtLink>
              <NuxtLink to="/polymart">
                <h5 class="font-bold mb-0 ml-4">Polymart</h5>
              </NuxtLink>
              <NuxtLink to="/servers">
                <h5 class="font-bold mb-0 ml-4">Servers</h5>
              </NuxtLink> -->
            </div>
          </div>
          <ColorModeButton />
        </div>
      </div>
    </nav>
  </div>
</template>
