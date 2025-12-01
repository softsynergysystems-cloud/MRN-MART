---
description: Fix and validate pom.xml for MRN-MART backend
---

## Workflow steps

1. **Backup existing pom.xml**
   ```bash
   cp d:/GIT-REMOTE-SERVER-SYNERGY-SYSTEM/backend/MRN-MART/pom.xml d:/GIT-REMOTE-SERVER-SYNERGY-SYSTEM/backend/MRN-MART/pom.xml.bak
   ```

2. **Overwrite pom.xml with a clean template**
   ```bash
   cat > d:/GIT-REMOTE-SERVER-SYNERGY-SYSTEM/backend/MRN-MART/pom.xml <<'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.5</version>
        <relativePath/>
    </parent>

    <groupId>com.example</groupId>
    <artifactId>MRN-MART</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>MRN-MART</name>
    <description>Demo project for Spring Boot</description>
    <url>https://github.com/your-org/MRN-MART</url>

    <licenses>
        <license>
            <name>Apache License, Version 2.0</name>
            <url>http://www.apache.org/licenses/LICENSE-2.0</url>
        </license>
    </licenses>

    <developers>
        <developer>
            <id>your-id</id>
            <name>Your Name</name>
            <email>you@example.com</email>
        </developer>
    </developers>

    <scm>
        <connection>scm:git:git://github.com/your-org/MRN-MART.git</connection>
        <developerConnection>scm:git:ssh://github.com/your-org/MRN-MART.git</developerConnection>
        <url>https://github.com/your-org/MRN-MART</url>
        <tag>HEAD</tag>
    </scm>

    <properties>
        <java.version>17</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webmvc</artifactId>
        </dependency>
        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <!-- Test dependencies (optional) -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webmvc-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <annotationProcessorPaths>
                        <path>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </path>
                    </annotationProcessorPaths>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>
EOF
   ```

3. **Validate the new pom.xml**
   ```bash
   cd d:/GIT-REMOTE-SERVER-SYNERGY-SYSTEM/backend/MRN-MART
   mvn -q validate
   ```

If the validation succeeds, the pom.xml is now correct. If any errors appear, inspect the output and adjust the template accordingly.
