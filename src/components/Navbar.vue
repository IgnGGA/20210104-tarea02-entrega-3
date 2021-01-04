<template>
    <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-dark ">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">NYLS</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse __web-inspector-hide-shortcut__" id="navbarColor01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
           <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/info">Info</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/rules">Rules</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  <router-view />
</template>