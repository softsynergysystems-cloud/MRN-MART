package com.example.MRN.MART.securityConfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
            .authorizeHttpRequests(auth -> auth
                // 🚀 Allow swagger without login
                .requestMatchers(
                        "/swagger-ui/**",
                        "/swagger-ui.html",
                        "/v3/api-docs/**",
                        "/v3/api-docs",
                        "/v3/api-docs.yaml",
                        "/swagger-resources/**",
                        "/webjars/**"
                ).permitAll()

                // 🔐 secure all other endpoints
                .anyRequest().authenticated()
            )

            // Default login form
            .formLogin(Customizer.withDefaults())

            // Allow basic auth as fallback
            .httpBasic(Customizer.withDefaults())

            // Disable CSRF for swagger (important)
            .csrf(csrf -> csrf
                .ignoringRequestMatchers(
                        "/swagger-ui/**",
                        "/v3/api-docs/**"
                )
            );

        return http.build();
    }
}
